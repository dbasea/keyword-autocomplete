import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { ClipboardCopy } from "./copy";

type Props = {
  data: [];
  loading: boolean;
  title: string;
  Icon: React.ReactElement;
};
export const ResultCard: React.FC<Props> = ({ data, loading, title, Icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        {Icon}
      </CardHeader>
      {data.length === 0 ? null : <ClipboardCopy copyText={data.join(" ")} />}
      <CardContent>
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          data.map((item, i) => <p key={i}>{item}</p>)
        )}
      </CardContent>
    </Card>
  );
};
