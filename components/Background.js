export default function Background() {
  return (
    <div
      className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
      style={{
        backgroundImage: "url('images/splash.jpeg')",
        zIndex: -1,
      }}
    />
  );
}
