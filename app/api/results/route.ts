import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { search } = await req.json();

  if (!search) {
    return new NextResponse("search required", { status: 400 });
  }
  const [braveRes, bingRes, googleRes, ecosiaRes, duckRes, yahoo, amazon, youtube] =
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
      axios.get(`https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=${search}&lop=en_US`),
      axios.get(`https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=${search}&xhr=t&xssi=t&gl=us&dataType=jsonp`)

    ]);
  
    let youtubeKW

    if(youtube && youtube.data){
      let dataString = youtube.data;
      if (typeof dataString === 'string' && dataString.startsWith(')]}\'')) {
        dataString = dataString.substring(4);
      }
      const dataObject = JSON.parse(dataString);
      const suggestions = dataObject[1];
      youtubeKW = suggestions.map((item: any[]) => item[0]).slice(0, 8);
    }

  const res = {
    bing: bingRes.data[1] ? bingRes.data[1].slice(0, 8) : [],
    brave: braveRes.data[1] ? braveRes.data[1].slice(0, 8) : [],
    google: googleRes.data[1] ? googleRes.data[1].slice(0, 8) : [],
    ecosia: ecosiaRes.data.suggestions ? ecosiaRes.data.suggestions.slice(0, 8) : [],
    duck: duckRes.data ? duckRes.data.slice(0, 8).map((item: any) => item.phrase) : [],
    yahoo: yahoo.data.gossip.results ? yahoo.data.gossip.results.slice(0, 8).map((item: any) => item.key) : [],
    amazon: amazon.data.suggestions ? amazon.data.suggestions.slice(0, 8).map((item: any) => item.value) : [],
    youtube: youtubeKW
  };
  return NextResponse.json(res);
}
