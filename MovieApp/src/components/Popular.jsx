import styled from "styled-components";
import { BookMarkIcon } from "../assets/Icons/BookmarkIcon";
import "swiper/css";
import { Text } from "./Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  height: 400px;
`;

const SwiperContainer = styled(Swiper)`
  --swiper-pagination-color: ${(props) =>
    props.theme.colorpalette["accent-dark"]};
  --swiper-pagination-bullet-inactive-opacity: 0.7;

  padding-bottom: 50px;
`;

const Slide = styled(SwiperSlide)`
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Card = styled.div`
  max-width: 200px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  border: solid 2px ${(props) => props.theme.colorpalette["accent-light"]};
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Title = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  max-width: 170px;
`;

export const Popular = ({ popularMovies, popularTvShows }) => {
  const media = popularMovies ?? popularTvShows;
  const navigate = useNavigate();

  const onSubmit = (id, mediaType) => {
    const route = mediaType === "movie" ? "/movie" : "/tv";
    navigate(`${route}/${id}`);
  };

  return (
    <Container>
      <SwiperContainer
        spaceBetween={50}
        slidesPerView={8}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {media.map((item) => {
          const mediaType = item.title ? "movie" : "tv";
          return (
            <Slide key={item.id} onClick={() => onSubmit(item.id, mediaType)}>
              <Card>
                <BookMarkIcon />
                <Img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
              </Card>
              <Title variant="medium">{item.title || item.name}</Title>
            </Slide>
          );
        })}
      </SwiperContainer>
    </Container>
  );
};
