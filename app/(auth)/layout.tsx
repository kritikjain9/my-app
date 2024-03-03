export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className="some-className">
            <div className="p-4 border-b text-center">Login now to get 80% off man</div>
            {children}
        </body>
    );
}
