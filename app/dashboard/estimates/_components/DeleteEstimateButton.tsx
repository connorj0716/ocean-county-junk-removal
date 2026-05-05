"use client";

import { Trash2 } from "lucide-react";
import { deleteEstimateAction } from "../_actions";

export default function DeleteEstimateButton({
  id,
  customer,
}: {
  id: number;
  customer: string;
}) {
  return (
    <form
      action={deleteEstimateAction}
      onSubmit={(e) => {
        if (
          !confirm(
            `Delete the estimate for ${customer}? This cannot be undone.`
          )
        ) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-700"
      >
        <Trash2 className="h-3.5 w-3.5" />
        Delete
      </button>
    </form>
  );
}
