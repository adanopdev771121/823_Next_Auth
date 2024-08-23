import IconLogo from "./_components/IconLogo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center bg-green-100 pt-14">
          <IconLogo />
          <p className="text-3xl">TrueLetter</p>
        </div>

        {children}
      </body>
    </html>
  );
}
