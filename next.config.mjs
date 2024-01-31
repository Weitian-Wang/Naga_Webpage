/** @type {import('next').NextConfig} */
const nextConfig = {
    //this line will tell the build to create a file with this name
    // distDir: "build",
    images: { unoptimized: true },
    output: 'export',
    trailingSlash: true,
};
export default nextConfig;
