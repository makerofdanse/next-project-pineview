/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: "/next-project-pineview",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
