import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SOFone from "../imgs/devlogs/SOF 0.svg";
import SOFtwo from "../imgs/devlogs/SOF 1.svg";
import SOFthree from "../imgs/devlogs/SOF 2.svg";
import SOFfour from "../imgs/devlogs/SOF 3.svg";
import SOFfive from "../imgs/devlogs/SOF 4.svg";
import SOFLone from "../imgs/devlogs/SOFL 1.svg";
import thefourthfriend from "../imgs/devlogs/thefourthfriend.svg";
import "./styles/Devlogs.css";

const Devlogs = () => {
  useEffect(() => {
    document.title = "Sword Of Fire, The Fourth Friend devlogs are here!";
  }, []);
  return (
    <div className="devlogs">
      <Navbar />
      <div className="dev-cards">
        <div className="devcards">
          <a
            href="https://www.youtube.com/watch?v=F_j4lvZ05_w&t=26s"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={SOFone}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                In this video I show you my game I'm creating called Sword Of
                Fire WISHLIST NOW GAMERS at
                https://the-orange-triangle-team.itch.io/sword-of-fire WISHLIST
                MY OTHER GAME WHICH MY FRIENDS AND I ARE MAKING at
                https://the-orange-triangle-team.itch.io/the-fourth-friend​
                Kevin Brown Music: https://freesound.org/people/KevinBrown/
              </span>
            </div>
          </a>

          <a
            href="https://youtu.be/SrAFq4ga6bE"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={SOFtwo}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                In this video, I show you a preview of NPC's system I made for
                my game ▶WISHLIST MY GAME Sword Of Fire at
                https://the-orange-triangle-team.itch.io/sword-of-fire ▶WISHLIST
                The Fourth Friend at
                https://the-orange-triangle-team.itch.io/the-fourth-friend
                ▶Music: https://opengameart.org/content/4-chiptunes-adventure
                Find Me On: ▶Twitter: https://twitter.com/chandulanka18
                ▶Instagram: https://instagram.com/chandu.lanka13 ▶Join Our
                Discord Server: https://discord.gg/9qHbk7tbf3 Thanks For
                Watching
              </span>
            </div>
          </a>

          <a
            href="https://youtu.be/ulwlAvWzI40"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={SOFthree}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                Hi, guys welcome back to another devlog. In this devlog, I show
                you my bow and arrow system. ▶WISHLISTS◀ ▶WISHLIST Sword Of Fire
                at https://the-orange-triangle-team.itch.io/sword-of-fire
                ▶WISHLIST The Fourth Friend at
                https://the-orange-triangle-team.itch.io/the-fourth-friend
                ▶DISCORD◀ ▶Join The Discord At https://discord.gg/9qHbk7tbf3
                ▶Find Me On◀ ▶Twitter: https://twitter.com/chandulanka18
                ▶Instagram: https://instagram.com/chandu.lanka13 ▶Music◀ Music
                by Juhani Junkala
              </span>
            </div>
          </a>

          <a
            href="https://youtu.be/pTuqQFbfVzw"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={SOFfour}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                In this video, I show you a preview of my Arrow System
                ▶WISHLISTS◀ ▶Wishlist Sword Of Fire at
                https://the-orange-triangle-team.itch.io/sword-of-fire ▶Wishlist
                The Fourth Friend at
                https://the-orange-triangle-team.itch.io/the-fourth-friend Music
                By Juhani Junkala
              </span>
            </div>
          </a>

          <a href="https://youtu.be/w6LzJpKVQoY" className="devlink">
            <div className="devcard">
              <img
                className="devimg"
                src={SOFfive}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                In this devlog I show you some progress on our game Sword Of
                Fire ▶WISHLISTS◀ ▶Wishlist Sword Of Fire at
                https://the-orange-triangle-team.itch.io/sword-of-fire ▶Wishlist
                The Fourth Friend at
                https://the-orange-triangle-team.itch.io/the-fourth-friend Find
                Me On📞📱: ▶Instagram: https://instagram.com/chandu.lanka13
                ▶Twitter: https://twitter.com/chandulanka18 Music made by Juhani
                Junkala
              </span>
            </div>
          </a>
          <a
            href="https://youtu.be/SBKoIfAKYS8"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={SOFLone}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                In this video I show you Drawing A disappear animation for my
                NPC - Birger Sword Of Fire WISHLIST NOW GAMERS at
                https://the-orange-triangle-team.itch.io/sword-of-fire WISHLIST
                MY OTHER GAME WHICH MY FRIENDS AND I ARE MAKING at
                https://the-orange-triangle-team.itch.io/the-fourth-friend​
                Kevin Brown Music: https://freesound.org/people/KevinBrown/
              </span>
            </div>
          </a>
          <a
            href="https://youtu.be/jHYiek26yXE"
            target="_blank"
            className="devlink"
          >
            <div className="devcard">
              <img
                className="devimg"
                src={thefourthfriend}
                alt="Sword Of Fire Devlog #0"
              />
              <span className="devdesc">
                wishlist now gamers at ||
                https://the-orange-triangle-team.itch.io/the-fourth-friend find
                me on: ➡Instagram: https://instagram.com/chandu.lanka13
                ➡Twitter: https://twitter.com/chandulanka18 ➡My Website:
                https://orange-triangle.web.app
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Devlogs;
