export const cardSectionStyle = [
  "card-section",
  "grid",
  "grid-col-5",
  "md:gap-y-6",
  "gap-y-5",
];

export const cardStyle = [
  "card",
  "col-span-1",
  "w-[3.2rem]",
  "h-[3.2rem]",
  "md:w-[4rem]",
  "md:h-[4rem]",
  "bg-neutral-200",
  "rounded",
  "cursor-pointer",
  "md:hover:bg-zinc-200/70",
  "active:opacity-[0.4]",
];

export const imageLinks = [
  {
    cat: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
];

export const redStyle = ["shadow-lg", "shadow-red-600/50"];

export const blueStyle = ["shadow-lg", "shadow-blue-600/50"];

const cardData = [
  {
    name: "Apple",
    image: `https://th.bing.com/th/id/OIG3.z0pc0j.yWy9tfzOUN7IB?w=270&h=270&c=6&r=0&o=5&pid=ImgGn`,
  },
  {
    name: "Google",
    image:
      "https://th.bing.com/th/id/OIG1.gR9CwqbdkyHizHEeXI4v?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Microsoft",
    image:
      "https://th.bing.com/th/id/OIG3.CZzKalFEdjZfASh8LIp2?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Tesla",
    image:
      "https://th.bing.com/th/id/OIG2.8lnOsyZRiIZktAH6u0rI?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Netflix",
    image:
      "https://th.bing.com/th/id/OIG2.45Zj9baTnbRy.58srocu?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Youtube",
    image:
      "https://th.bing.com/th/id/OIG2.MP8JYFD17Im2NnBFzX5p?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Amazon",
    image:
      "https://th.bing.com/th/id/OIG3.WVFRG_XUgHnjW35ktZ1y?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
  {
    name: "Spotify",
    image:
      "https://th.bing.com/th/id/OIG1.tC.ssrO0aOGWVUufS.hY?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
  },
];

const newCardData = [...cardData, ...cardData];

for (let i = newCardData.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [newCardData[i], newCardData[j]] = [newCardData[j], newCardData[i]];
}

export { newCardData };
