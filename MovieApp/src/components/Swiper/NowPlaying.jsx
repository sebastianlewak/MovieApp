import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "../../assets/Icons/StarIcon";
import { Text } from "../Text";

const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 800px;
`;

const SwiperContainer = styled(Swiper)`
  --swiper-navigation-size: 40px;
  --swiper-navigation-color: ${(props) =>
    props.theme.colorpalette["accent-dark"]};

  --swiper-pagination-color: ${(props) =>
    props.theme.colorpalette["accent-dark"]};
  --swiper-pagination-bullet-inactive-opacity: 0.7;
`;

const Slide = styled(SwiperSlide)`
  position: relative;
  overflow: hidden;
  max-width: 1500px;
  width: 100%;
  height: 800px;
  border-radius: 18px;
  display: grid;
  place-items: start;
  grid-template-rows: 1fr 1fr;
  padding: 10px 40px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${(props) => (props.url ? `url(${props.url})` : "none")};
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: brightness(0.7);
  }
`;

const Information = styled.div`
  display: grid;
  grid-template-rows: min-content min-content min-content min-content;
  grid-row-start: 3;
  row-gap: 20px;
  margin-bottom: 50px;
`;

const Statistic = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Button = styled.div`
  background: ${(props) => props.theme.colorpalette["accent-dark"]};
  border-radius: 10px;
  padding: 5px 10px;
  display: grid;
  place-items: center;
  height: 35px;
  max-width: 100px;
  width: 100%;
  cursor: pointer;
`;

export const NowPlaying = ({ nowPlaying }) => {
  const navigate = useNavigate();

  const onSubmit = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <Container>
      <SwiperContainer
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {nowPlaying.map((item) => {
          return (
            <Slide
              url={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              key={item.id}
            >
              <Information>
                <Text variant="subtitle">{item.title}</Text>
                <Statistic>
                  <StarIcon size="28" />
                  <Text variant="medium">
                    {item.vote_average} | {item.release_date}
                  </Text>
                </Statistic>
                <Text variant="medium">{item.overview}</Text>
                <Button onClick={() => onSubmit(item.id)}>More Info</Button>
              </Information>
            </Slide>
          );
        })}
      </SwiperContainer>
    </Container>
  );
};
