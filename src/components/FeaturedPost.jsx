import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center">
        <div className="px-4 w-8/12">
          <img src="/featured-tumbnail.png" alt="" className="rounded-xl" />
        </div>
        <div className="w-4/12 px-4">
          <InfoPost
            category="New Jeans"
            date="Aug 11, 2025"
            title="I miss NewJeans. I hope you can rise to glory again."
            shortDescription="A longing call for your return, wishing to see your bright smiles, hear your unforgettable melodies, and feel the magic you once brought into the hearts of millions."
            authorAvatar="/author.png"
            authorName="santuy"
            authorRole="admin"
          />
        </div>
      </div>
    </article>
  );
}
