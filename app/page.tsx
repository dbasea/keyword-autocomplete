"use client";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

import debounce from "lodash.debounce";
import { Results } from "@/types";
import { Cards } from "@/components/cards";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Results>({
    brave: [],
    google: [],
    bing: [],
    ecosia: [],
    duck: [],
    yandex: [],
    yahoo: [],
  });

  const debouncedSearch = debounce(async (value: string) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/results", {
        search: value,
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-16">
      <h2 className="text-2xl font-bold text-primary">Search Your Keyword</h2>

      <Input
        id="search"
        value={search}
        onChange={onChange}
        className="w-80 h-12 "
        placeholder="Search"
      />
      <Cards data={data} loading={loading} />
    </main>
  );
}
