import { useState } from "react";
import { Plus, Trash2, Image, FileText } from "lucide-react";

/* Simple admin panel for managing content (frontend-only, localStorage) */
type ContentItem = { id: string; title: string; description: string; imageUrl: string };

const Admin = () => {
  const [items, setItems] = useState<ContentItem[]>(() => {
    const saved = localStorage.getItem("pcs-admin-content");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ title: "", description: "", imageUrl: "" });

  // Save to localStorage
  const save = (updated: ContentItem[]) => {
    setItems(updated);
    localStorage.setItem("pcs-admin-content", JSON.stringify(updated));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title) return;
    const newItem: ContentItem = { id: Date.now().toString(), ...form };
    save([...items, newItem]);
    setForm({ title: "", description: "", imageUrl: "" });
  };

  const handleDelete = (id: string) => save(items.filter((i) => i.id !== id));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Admin header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">PCS Admin Panel</h1>
        <a href="/" className="text-sm hover:underline" title="Back to website" aria-label="Back to website">
          ← Back to Website
        </a>
      </header>

      <main className="container py-8">
        {/* Add content form */}
        <section className="bg-card dark:bg-card rounded-xl p-6 shadow-md mb-8 border border-border" aria-label="Add new content">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" aria-hidden="true" /> Add New Content
          </h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Content title"
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              aria-label="Content description"
            />
            <input
              type="url"
              placeholder="Image URL (optional)"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Image URL"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Add content"
            >
              Add Content
            </button>
          </form>
        </section>

        {/* Content list */}
        <section aria-label="Content list">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" aria-hidden="true" /> Managed Content ({items.length})
          </h2>
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No content added yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card dark:bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" loading="lazy" />
                  )}
                  {!item.imageUrl && (
                    <div className="w-full h-40 bg-muted flex items-center justify-center">
                      <Image className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="mt-3 text-sm text-destructive hover:underline flex items-center gap-1"
                      aria-label={`Delete ${item.title}`}
                      title={`Delete ${item.title}`}
                    >
                      <Trash2 className="w-3 h-3" aria-hidden="true" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
