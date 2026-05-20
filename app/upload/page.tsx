"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!image) return;

    setLoading(true);

    const cleanName = image.name.replace(/\s+/g, "-");
    const fileName = `${Date.now()}-${cleanName}`;

    const { error: uploadError } = await supabase.storage
      .from("posts")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      console.log(uploadError);
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("posts")
      .getPublicUrl(`uploads/${fileName}`);

    const imageUrl = data.publicUrl;

    const { error: dbError } = await supabase
      .from("posts")
      .insert([
        {
          title,
          description,
          image_url: imageUrl,
          username: "anonymous",
        },
      ]);

    if (dbError) {
      alert("Database upload failed");
      console.error(dbError);
      setLoading(false);
      return;
    }

    alert("Post uploaded!");

    setTitle("");
    setDescription("");
    setImage(null);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Upload Post
      </h1>

      <div className="max-w-xl space-y-6">

        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10 h-40"
        />

        <label
  className="
    flex items-center justify-center
    w-full p-6
    border border-dashed border-white/20
    rounded-2xl cursor-pointer
    bg-zinc-900 hover:bg-zinc-800
    transition text-gray-300
  "
>
  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setImage(e.target.files?.[0] || null)
    }
    className="hidden"
  />

  {image
    ? `Selected: ${image.name}`
    : "Select File to Upload"}
</label>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          {loading ? "Uploading..." : "Upload Post"}
        </button>

      </div>
    </main>
  );
}