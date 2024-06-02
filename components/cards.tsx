import { Results } from "../types";
import { ResultCard } from "./single-card";
import {
  AmazonIcon,
  BingIcon,
  BraveIcon,
  DuckIon,
  EcosiaIcon,
  GoogleIcon,
  YahooIcon,
  YoutubeIcon,
} from "./icons";

type Props = {
  data: Results;
  loading: boolean;
};

export const Cards: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      <ResultCard
        data={data.google}
        loading={loading}
        title="Google"
        Icon={<GoogleIcon />}
      />

      <ResultCard
        data={data.bing}
        loading={loading}
        title="Bing"
        Icon={<BingIcon />}
      />
      <ResultCard
        data={data.duck}
        loading={loading}
        title="DuckDuckGo"
        Icon={<DuckIon />}
      />

      <ResultCard
        data={data.brave}
        loading={loading}
        title="Brave"
        Icon={<BraveIcon />}
      />
      <ResultCard
        data={data.yahoo}
        loading={loading}
        title="Yahoo"
        Icon={<YahooIcon />}
      />

      <ResultCard
        data={data.ecosia}
        loading={loading}
        title="Ecosia"
        Icon={<EcosiaIcon />}
      />

      <ResultCard
        data={data.amazon}
        loading={loading}
        title="Amazon"
        Icon={<AmazonIcon />}
      />
      <ResultCard
        data={data.youtube}
        loading={loading}
        title="Youtube"
        Icon={<YoutubeIcon />}
      />

    </div>
  );
};
