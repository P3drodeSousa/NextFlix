import { useState, forwardRef, useImperativeHandle, useCallback } from "react";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import ReactPlayer from "react-player/lazy";
import { Drawer, Icon, Poster } from "./style";
import Details from "./Details";
import { FaRegWindowClose } from "react-icons/fa";

function MovieDetails({ drawer, id, close }, ref) {
  const { data } = useSWR(`/api/${id}`, fetcher);
  const [ready, setReady] = useState(false);

  const closeDrawer = () => {
    close();
  };

  useImperativeHandle(
    ref,
    () => {
      return { changeReady };
    },
    []
  );

  const changeReady = useCallback(() => {
    setReady(false);
  }, []);

  if (!data) return <div></div>;

  const { details, video } = data;
  return (
    <Drawer drawer={drawer}>
      <Icon onClick={closeDrawer}>
        <FaRegWindowClose color="white" size={45} />
      </Icon>

      <div style={{ position: "relative" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          playing={drawer}
          onStart={() => setReady(true)}
          width="100%"
          // playsinline
        />

        {!ready && (
          <Poster
            src={
              details?.backdrop_path
                ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`
                : details?.poster_path
                ? `https://image.tmdb.org/t/p/w1280${details.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png`
            }
            alt="movie poster"
          />
        )}
      </div>

      <div>{details && <Details details={details} />}</div>
    </Drawer>
  );
}

export default forwardRef(MovieDetails);
