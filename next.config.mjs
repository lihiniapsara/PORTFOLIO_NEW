/** @type {import('next').NextConfig} */
const repoName = 'PORTFOLIO_NEW'
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
