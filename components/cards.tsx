import { Results } from "@/types";
import { ResultCard } from "./single-card";
import {
  BingIcon,
  BraveIcon,
  DuckIon,
  EcosiaIcon,
  GoogleIcon,
  YahooIcon,
  YandexIcon,
} from "./icons";

type Props = {
  data: Results;
  loading: boolean;
};

export const Cards: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  w-full">
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
        data={data.yandex}
        loading={loading}
        title="Yandex"
        Icon={<YandexIcon />}
      />
    </div>
  );
};
