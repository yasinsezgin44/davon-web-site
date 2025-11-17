export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="dv-container">{children}</div>;
}
