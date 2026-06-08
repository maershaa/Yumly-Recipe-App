import { girlImg } from '@/assets/images';
const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="heroSection">
        <div>
          <p>Cook. Create. Share.</p>
          <h2>
            Store your favorite recipes, organize your collection and discover
            new dishes from the community.
          </h2>

          <button>Create Recipe</button>
          <button>Explore Recipes</button>
        </div>

        <img src={girlImg} alt="Cooking illustration" />
      </section>

      {/* QUICK ACTIONS */}
      <section>
        <h2>Quick Actions</h2>
        <button>Create Recipe</button>
        <button>Browse Recipes</button>
        <button>My Cookbook</button>
      </section>

      {/* FEATURED */}
      <section>
        <h2>Latest Recipes</h2>
        <div>
          {/* тут потом карточки */}
          <div>Recipe Card</div>
          <div>Recipe Card</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section>
        <h2>Explore by Category</h2>
        <ul>
          <li>Italian</li>
          <li>Asian</li>
          <li>Desserts</li>
          <li>Healthy</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section>
        <h2>Why Yumly</h2>
        <ul>
          <li>Create Your Own Recipes</li>
          <li>Find Recipes Instantly</li>
          <li>Build Your Personal Cookbook</li>
        </ul>
      </section>

      {/* STATS */}
      <section>
        <h2>Community</h2>
        <p>10,000+ recipes stored</p>
        <p>New recipes added daily</p>
      </section>

      {/* CTA */}
      <section>
        <p>Start building your cookbook today</p>
        <button>Create Your First Recipe</button>
      </section>
    </div>
  );
};
export default HomePage;
