import {
  StatsSection,
  StatsContainer,
  RightSide,
  StatCard,
  IconWrapper,
  SocialProof,
  AvatarGroup,
  Avatar,
  ProofText,
} from './Statistics.styled';
import {
  chefPhoto1,
  chefPhoto2,
  chefPhoto3,
  chefPhoto4,
} from '@/assets/images';

// Временные заглушки для аватарок пользователей (в продакшене заменяются на реальные линки)
const avatars = [chefPhoto1, chefPhoto2, chefPhoto3, chefPhoto4];

const Statistics = () => {
  return (
    <StatsSection>
      <StatsContainer>
        {/* Левая часть: Социальное доказательство и текст */}
        <SocialProof>
          <h2>Our Growing Family</h2>
          <p>
            Yumly is more than just a cookbook. It’s a global community of food
            lovers, home chefs, and culinary creators sharing their passion
            every day.
          </p>

          <AvatarGroup>
            <div className="avatars">
              {avatars.map((url, index) => (
                <Avatar
                  key={index}
                  src={url}
                  alt={`Community chef ${index + 1}`}
                />
              ))}
              <div className="avatar-plus">+9k</div>
            </div>
            <ProofText>
              Join <strong>9,400+ chefs</strong> who already share their
              culinary secrets!
            </ProofText>
          </AvatarGroup>
        </SocialProof>

        {/* Правая часть: Сетка с красивыми карточками метрик */}
        <RightSide>
          <StatCard>
            <IconWrapper className="green">🍳</IconWrapper>
            <div>
              <h3>10,000+</h3>
              <p>Delicious Recipes Stored</p>
            </div>
          </StatCard>

          <StatCard>
            <IconWrapper className="orange">🔥</IconWrapper>
            <div>
              <h3>Daily</h3>
              <p>Fresh Recipes Added</p>
            </div>
          </StatCard>
        </RightSide>
      </StatsContainer>
    </StatsSection>
  );
};

export { Statistics };
