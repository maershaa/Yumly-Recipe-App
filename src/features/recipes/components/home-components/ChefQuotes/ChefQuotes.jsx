import {
  QuotesSection,
  ScrollContainer,
  QuotesHeader,
  QuotesList,
  QuotesItem,
} from './ChefQuotes.styled';

import { chefsQuotes as quotes } from '@/features/recipes/constants';

const ChefQuotes = () => {
  return (
    <QuotesSection>
      <QuotesHeader>
        <p className="sectionLabel">CULINARY WISDOM</p>

        <h2>
          Inspiration From
          <span> Culinary Legends</span>
        </h2>

        <p className="sectionDescription">
          Timeless thoughts from world-renowned chefs who shaped the way we
          think about food, creativity and cooking.
        </p>
      </QuotesHeader>

      <ScrollContainer>
        <QuotesList>
          {quotes.map(({ name, quote, avatar, status }) => (
            <QuotesItem>
              <figure class="chef-quote-card">
                <blockquote>
                  <span class="quote-icon">“</span>
                  <p>{quote}</p>
                  <span class="quote-icon"></span>
                </blockquote>

                <figcaption>
                  <img
                    src={avatar}
                    alt={name}
                    class="chef-avatar"
                    loading="lazy"
                  />
                  <div class="chef-info">
                    <cite class="chef-name">Chef {name}</cite>
                    <span class="chef-status">{status}</span>
                  </div>
                </figcaption>
              </figure>
            </QuotesItem>
          ))}
        </QuotesList>
      </ScrollContainer>
    </QuotesSection>
  );
};

export { ChefQuotes };
