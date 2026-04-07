/* Full-screen loading spinner */
const Loader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background" role="status" aria-label="Loading">
    <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loader;
