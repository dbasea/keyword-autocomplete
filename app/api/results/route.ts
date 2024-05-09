import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { search } = await req.json();

  if (!search) {
    return new NextResponse("search required", { status: 400 });
  }
  const [braveRes, bingRes, googleRes, ecosiaRes, duckRes, yandex, yahoo] =
    await Promise.all([
      axios.get(`https://search.brave.com/api/suggest?q=${search}`),
      axios.get(`https://api.bing.com/osjson.aspx?query=${search}`),
      axios.get(
        `https://www.google.com/complete/search?q=${search}&client=firefox`
      ),
      axios.get(`https://ac.ecosia.org/?q=${search}`),
      axios.get(`https://duckduckgo.com/ac/?q=${search}`),
      axios.get(
        `https://yandex.com/suggest/suggest-ya.cgi?v=4&bemjson=0&part=${search}`
      ),

      axios.get(
        `https://search.yahoo.com/sugg/gossip/gossip-us-ura/?command=${search}&output=json&nresults=${10}`
      ),
    ]);

  const res = {
    bing: bingRes.data[1],
    brave: braveRes.data[1],
    google: googleRes.data[1],
    ecosia: ecosiaRes.data.suggestions,
    duck: duckRes.data.map((item: any) => item.phrase),
    yandex: yandex.data[1],
    yahoo: yahoo.data.gossip.results.map((item: any) => item.key),
  };
  return NextResponse.json(res);
}
