
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
				orbitron: ['Orbitron', 'monospace'],
				creepster: ['Creepster', 'cursive'],
				bungee: ['Bungee', 'cursive'],
				cinzel: ['Cinzel', 'serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				'share-tech': ['Share Tech Mono', 'monospace'],
				cormorant: ['Cormorant Garamond', 'serif'],
				anton: ['Anton', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				garamond: ['EB Garamond', 'serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'barbie-gradient': 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
				'breaking-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #eab308 100%)',
				'oppenheimer-gradient': 'linear-gradient(135deg, #0f172a 0%, #475569 50%, #f97316 100%)',
				'stranger-gradient': 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #fbbf24 100%)',
				'spider-gradient': 'linear-gradient(135deg, #0f0f23 0%, #a855f7 50%, #06b6d4 100%)',
				'dune-gradient': 'linear-gradient(135deg, #1e293b 0%, #d97706 50%, #1e40af 100%)',
				'nolan-gradient': 'linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #1e3a8a 100%)',
				'matrix-gradient': 'linear-gradient(135deg, #000000 0%, #22c55e 50%, #10b981 100%)',
				'potter-gradient': 'linear-gradient(135deg, #fef3c7 0%, #7c2d12 50%, #fbbf24 100%)',
				'gotham-gradient': 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #ffffff 100%)',
				'wakanda-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #7c3aed 50%, #fbbf24 100%)',
				'loki-gradient': 'linear-gradient(135deg, #0f2027 0%, #059669 50%, #92400e 100%)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				float: 'float 3s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
