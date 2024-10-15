import { log } from "console";
import { ragChat } from "../../lib/rag-chat";
import { redis } from "@/lib/redis";
import { ChatWrapper } from "@/components/ChatWrapper";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructURL({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );

  return decodedComponents.join("/");
}
const Page = async ({ params }: PageProps) => {
  console.log(params);
  const reconstructedURL = reconstructURL({ url: params.url as string[] });

  const isAlreadyIndexed = await redis.sismember(
    "indexed-url",
    reconstructedURL
  );
  console.log("Already Indexed", isAlreadyIndexed);


  const mockedSessions="mock-session"

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedURL,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", reconstructedURL);
  }





  return <ChatWrapper sessionID={ mockedSessions} />
};

export default Page;
