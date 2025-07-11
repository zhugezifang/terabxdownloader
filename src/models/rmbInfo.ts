import { RmbInfo } from "@/types/rmbInfo";
import { getSupabaseClient } from "./db";

export async function insertProject(code:string,description: string) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("rmb_infos")
    .insert({
      code: code,
      description: description
    })
    .select();

  if (error) {
    throw error;
  }

  return data[0];
}

export async function findProjectByCode(
  code: string
): Promise<RmbInfo | undefined> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("rmb_infos")
    .select("*")
    .eq("code", code)
    //.eq("status", ProjectStatus.Created)
    .single();

  if (!data) return undefined;

  return data;
}
