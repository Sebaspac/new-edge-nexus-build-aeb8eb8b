
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: 'hsl(var(--surface))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					subtle: 'hsl(var(--primary-subtle))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))',
					subtle: 'hsl(var(--secondary-subtle))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
					subtle: 'hsl(var(--accent-subtle))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'var(--radius-lg)',
				'2xl': 'var(--radius-xl)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'strong': 'var(--shadow-strong)',
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-glow': 'var(--gradient-glow)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
					to: { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-60px) scale(0.95)' },
					to: { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(60px) scale(0.95)' },
					to: { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
					to: { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				'float-soft': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-8px) rotate(1deg)' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'glow-pulse-modern': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--primary-glow) / 0.3), 0 0 60px hsl(var(--primary-glow) / 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 50px hsl(var(--primary-glow) / 0.6), 0 0 100px hsl(var(--primary-glow) / 0.2)'
					}
				},
				'text-reveal': {
					from: { opacity: '0', transform: 'translateY(100%)', filter: 'blur(4px)' },
					to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' }
				},
				'gradient-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'shimmer-effect': {
					'0%': { backgroundPosition: '-1000px 0', opacity: '0' },
					'30%': { opacity: '1' },
					'100%': { backgroundPosition: '1000px 0', opacity: '0' }
				},
				'parallax-float': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-10px) translateX(5px)' },
					'50%': { transform: 'translateY(0px) translateX(10px)' },
					'75%': { transform: 'translateY(10px) translateX(5px)' }
				},
				'magnetic-hover': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.05) rotate(2deg)' },
					'100%': { transform: 'scale(1.1) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up var(--duration-slow) var(--ease-out)',
				'slide-left': 'slide-in-left var(--duration-slow) var(--ease-out)',
				'slide-right': 'slide-in-right var(--duration-slow) var(--ease-out)',
				'scale-in': 'scale-in var(--duration-normal) var(--ease-bounce)',
				'text-reveal': 'text-reveal 0.8s var(--ease-out)',
				'float': 'float-soft 6s ease-in-out infinite',
				'rotate': 'rotate-slow 20s linear infinite',
				'glow': 'glow-pulse-modern 3s ease-in-out infinite',
				'gradient': 'gradient-flow 8s ease-in-out infinite',
				'shimmer': 'shimmer-effect 3s ease-in-out infinite',
				'parallax': 'parallax-float 8s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'ease-out': 'var(--ease-out)',
				'ease-in-out': 'var(--ease-in-out)',
				'ease-bounce': 'var(--ease-bounce)'
			},
			transitionDuration: {
				'fast': 'var(--duration-fast)',
				'normal': 'var(--duration-normal)',
				'slow': 'var(--duration-slow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
