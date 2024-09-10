/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./styles'],
		prependData: `
			@use "@/styles/variables" as *;
			@use "@/styles/mixins" as *;
		`
	}
}

export default nextConfig
