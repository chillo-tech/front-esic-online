import { useRouter } from "next/router";
import { useEffect } from "react";
import formations_list from "../../utils/data/formations-list";

export default function Formations() {
  const router = useRouter();

  return (
    <div>
      {JSON.stringify(
        formations_list.find((item) => (item.slut = router.query.slug))
      )}
    </div>
  );
}
