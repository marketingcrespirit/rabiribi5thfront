import React from "react";

import styles from "./player.module.css";

import music1 from "../public/assets/audios/01.mp3";
import music2 from "../public/assets/audios/02.mp3";
import music3 from "../public/assets/audios/03.mp3";
import music4 from "../public/assets/audios/04.mp3";
import music5 from "../public/assets/audios/05.mp3";

const playlist = [music1, music2, music3, music4, music5];

function getTime(time) {
  if (!isNaN(time)) {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }
}
class Player extends React.Component {
  state = {
    currentSong: null,
    music: "stopped",
    currentTime: null,
    duration: null,
  };

  render() {
    let button;
    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);
    const playlist = [
      {
        id: 1,
        title: "Go Easy",
        url: "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg",
      },
      {
        id: 2,
        title: "Dreams",
        url: "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 3,
        title: "Chill Out",
        url: "https://scontent.fbom11-1.fna.fbcdn.net/v/t1.0-9/54433190_2258561064201100_2218823514348060672_o.jpg?_nc_cat=107&_nc_ohc=14CJbrdmXusAQkPOoL9gbVg6VtyPIqSwXK7UiPTZ2llwMbExe7PuES1Ag&_nc_ht=scontent.fbom11-1.fna&oh=f5dde330f28bb39b984dcfb88cded3a2&oe=5EA792C6",
      },
      {
        id: 4,
        title: "Twistter",
        url: "https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg",
      },
      {
        id: 5,
        title: "Free Bird",
        url: "https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg",
      },
    ].map((item) => {
      if (this.state.currentSong === item.title && this.state.music === "paused") {
        button = (
          <button
            className={styles.button}
            onClick={() => {
              this.setState({ music: "playing" });
            }}
          >
            <i className="far fa-play-circle"></i>
          </button>
        );
      } else if (this.state.currentSong === item.title) {
        button = (
          <button className={styles.button} onClick={() => this.setState({ music: "paused" })}>
            <i className="far fa-pause-circle"></i>
          </button>
        );
      } else if (this.state.currentSong !== item.title || this.state.duration === this.state.currentTime) {
        button = (
          <button className={styles.button} onClick={() => this.setState({ currentSong: item.title })}>
            <i className="far fa-play-circle"></i>
          </button>
        );
      } else if (this.state.currentSong === "") {
        button = (
          <button className={styles.button} onClick={() => this.setState({ currentSong: item.title })}>
            <i className="far fa-play-circle"></i>
          </button>
        );
      }
      return (
        <div className="ui list">
          <div className="item">
            <div className="ui avatar image"></div>
            <div className={styles.content}>
              <li className="title" key={item.id} onClick={() => this.setState({ currentSong: item.title })}>
                {item.title}
              </li>
              {button}
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className={styles.mainContainer}>
          <div className={styles.playlist}>{playlist}</div>
          {/* <div className={styles.dashboard}>
            <div className={styles.timeContainer}>
              {currentTime} / {duration}
            </div>
            <div className="info-container">
              <div className="current-song">{this.state.currentSong ? this.state.currentSong : "Now playing"}</div>
            </div>

            <div className="button-container">
              {this.state.music === "stopped" && (
                <button
                  className={styles.button}
                  onClick={() => {
                    if (this.state.currentSong === null) {
                      this.setState({ currentSong: "Go Easy" });
                    }
                    this.setState({ music: "playing" });
                  }}
                >
                  <i className="far fa-play-circle"></i>
                </button>
              )}
              {this.state.music === "paused" && (
                <button
                  className={styles.button}
                  onClick={() => {
                    if (this.state.currentSong === null) {
                      this.setState({ currentSong: "Go Easy" });
                    }
                    this.setState({ music: "playing" });
                  }}
                >
                  <i className="far fa-play-circle"></i>
                </button>
              )}
              {this.state.music === "playing" && (
                <button className={styles.button} onClick={() => this.setState({ music: "paused" })}>
                  <i className="far fa-pause-circle"></i>
                </button>
              )}
            </div>
          </div> */}

          <audio ref={(ref) => (this.music = ref)} />
        </div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentSong !== prevState.currentSong) {
      let track;
      switch (this.state.currentSong) {
        case "Go Easy":
          track = music1;
          break;
        case "Dreams":
          track = music2;
          break;
        case "Chill Out":
          track = music3;
          break;
        case "Twistter":
          track = music4;
          break;
        case "Free Bird":
          track = music5;
          break;
        default:
          break;
      }

      if (track) {
        this.music.src = track;
        this.music.play();
        this.setState({
          music: "playing",
        });
      }
    }

    if (this.state.music !== prevState.music) {
      if (this.state.music === "paused") {
        this.music.pause();
      }
      if (this.state.music === "playing" && prevState.music === "paused") {
        this.music.play();
      }
      if (this.state.music === "stop") {
        this.music.pause();
        this.currentTime = 0;
        this.setState({
          currentSong: null,
        });
      }
    }
  }

  componentDidMount() {
    this.music.addEventListener("timeupdate", (e) => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      });
      if (this.state.duration && this.state.duration === this.state.currentTime) {
        this.setState({ music: "paused" });
      }
    });
  }

  componentWillUnmount() {
    this.music.removeEventListener("timeupdate", () => {});
  }
}

export default Player;
