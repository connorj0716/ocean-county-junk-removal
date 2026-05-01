"use client";

import { Trash2 } from "lucide-react";
import { deleteJobAction } from "../_actions";

export default function DeleteJobButton({
  id,
  customer,
}: {
  id: string;
  customer: string;
}) {
  return (
    <form
      action={deleteJobAction}
      onSubmit={(e) => {
        if (!confirm(`Delete the job for ${customer}? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-red-200 bg-white hover:bg-red-50 text-red-700"
      >
        <Trash2 className="h-3.5 w-3.5" />
        Delete
      </button>
    </form>
  );
}
