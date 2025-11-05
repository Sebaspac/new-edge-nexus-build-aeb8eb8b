import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'assets/*.png', 'assets/*.mp4'],
      manifest: {
        name: 'New Edge',
        short_name: 'New Edge',
        description: 'AI-First Business Solutions',
        theme_color: '#0F172A',
        background_color: '#0F172A',
        display: 'standalone',
        icons: [
          {
            src: '/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB max
        runtimeCaching: [
          // HTML: Network-First for freshness
          {
            urlPattern: /\.html$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              }
            }
          },
          
          // Videos: StaleWhileRevalidate with partial caching
          {
            urlPattern: /\.(mp4|webm)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'video-cache',
              expiration: {
                maxEntries: 15,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
              },
              plugins: [
                {
                  // Only cache small video chunks (previews)
                  cacheWillUpdate: async ({ response }) => {
                    if (response && response.headers) {
                      const contentLength = response.headers.get('content-length');
                      // Only cache if smaller than 5MB
                      if (contentLength && parseInt(contentLength) < 5 * 1024 * 1024) {
                        return response;
                      }
                    }
                    return null;
                  }
                }
              ]
            }
          },
          
          // Images: CacheFirst with WebP priority
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          
          // Google Fonts CSS
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          
          // Google Fonts Files
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: 'lightningcss',
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor splitting for better caching
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Animation libraries
            if (id.includes('framer-motion') || id.includes('motion')) {
              return 'animation-vendor';
            }
            // UI components
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            // Three.js and 3D
            if (id.includes('three') || id.includes('@react-three') || id.includes('@splinetool')) {
              return '3d-vendor';
            }
            // Everything else
            return 'vendor';
          }
          
          // Page-based code splitting
          if (id.includes('/pages/Studio')) return 'studio-page';
          if (id.includes('/pages/Media')) return 'media-page';
          if (id.includes('/pages/Lab')) return 'lab-page';
          if (id.includes('/pages/Products')) return 'products-page';
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  esbuild: mode === 'production' ? {
    drop: ['console', 'debugger'],
  } : {},
}));
