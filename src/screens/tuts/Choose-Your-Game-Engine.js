import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import ChooseYourEngine from "../../imgs/Choose Your Engine.svg";
import "./styles/cye.css";
import UnityEditor from "../../imgs/unity-editor.png";
import no_code from "../../imgs/no-code.png";
import GodotEditor from "../../imgs/godot-editor.svg";
import GodotNoCode from "../../imgs/godot-no-code.png";

const Choose_Your_Game_Engine = () => {
  useEffect(() => {
    document.title = "Choose Your Game Engine";
  }, []);
  return (
    <div className="choose_your_game_engine">
      <Navbar />
      <div className="img-container">
        <img className="banner-cye" src={ChooseYourEngine} alt="" />
      </div>
      <div className="content-container">
        <div className="content">
          <span className="quick-intro">
            In this post I give you suggestions on which Game Engine You would
            use from a particular case EX: 'No coding experience, A particular
            programming language etc.'
          </span>
          <h3 className="post_header">Unity</h3>
          <span className="unity-desc">
            Unity is one of the best engine's in the game dev industry and has
            been out since 2 August 2004, which means it's one of the oldest yet
            newest game engines out there. You can make 2d and 3d games and
            export of to many different platforms such as XBOX, Windows, Mac,
            Linux, etc. and even export of to VR.
          </span>
          <img className="editor" src={UnityEditor} alt="" />
          <span className="src">
            From{" "}
            <a
              className="link-post"
              href="https://www.omgubuntu.co.uk/2015/08/unity3d-linux-build"
              target="_blank"
            >
              omgubantu.co.uk
            </a>
          </span>
          <h3 className="unity-header">Unity Pros</h3>
          <span className="unity-pros">
            Unity uses on of the most popular programming language called
            C-SHARP which is an amazing programming language and is built by
            Microsoft. It has a massive community which is great because there
            are so many tuts on the engine from Brackeys, Blackthornprod, Code
            Monkey, etc. It is cross-platform so you can download it for
            Windows, Mac and Linux. It has A huge asset store which you can use.
          </span>
          <h3 className="unity-header">Unity Cons</h3>
          <span className="unity-cons">
            Well yes there are some cons to unity aswell. The documentation of
            several features is quite out of date and in some cases it is
            completely non-existent. Unity takes some of your revenue if you use
            Unity Personal and make a comercial game. It has no dark theme(only
            comes with unity pro and plus)(and this isn't really a problem it is
            for me though!). The Unity 3D Pro license doesn’t bring all the
            features to mobile. Hence an additional $1500-3000 investment is
            needed for Mobile Pro licenses which seems quite extravagant.
          </span>
          <h3 className="unity-header">Unity For Non-Programmers</h3>
          <span className="unity-non-programmers">
            Adventure Creator is the asset you need if you're into making 2D,
            2.5D or 3D games in Unity, no coding required. Its visual scripting
            system and intuitive Editor enables beginners to build an entire
            game without writing a line of code, and helps programmers
            plug-and-play their own functionality.
          </span>
          <img className="editor" src={no_code} alt="" />
          <span className="src">
            More Info At{" "}
            <a
              className="link-post"
              target="_blank"
              href="https://unity.com/how-to/make-games-without-programming"
            >
              Unity's Website
            </a>
          </span>

          <h3 className="post_header">Godot</h3>
          <span className="godot-desc">
            Godot is a 2D and 3D, cross-platform, free and open-source game
            engine released under the MIT license(means you can add code to the
            github repository). You can download it on Linux, Mac, and Windows.
            You can make games targeting PC, mobile, and web platforms, you can
            also release to Windows Universal(Xbox, Windows Phone's etc.)
          </span>
          <img className="editor" src={GodotEditor} alt="" />
          <h3 className="unity-header">Godot Pros</h3>
          <span className="godot-desc">
            Godot is open source so any game you release, the profit is all
            yours. The package is only 45 MB which is extremely low for a game
            engine. It uses a programming language similar to the easiest
            programming language in existance python so even if you don't know
            ANY CODING you can learn godot's programming language very easily.
            You can use alot of programming languages such as actual Python,
            C++, Kotlin, C-Sharp,etc.
          </span>
          <h3 className="unity-header">Godot Cons</h3>
          <span className="godot-desc">
            Godot is awesome but it does have some drawbacks... First godot
            doesn't support console yet so it is quite difficult to export of to
            consoles like XBOX, nintendo, etc. It sometimes can break and crash.
            It is still development so you can't update it you have to download
            the newer version.
          </span>
          <h3 className="unity-header">Godot For Non-Programmers</h3>
          <span className="godot-desc">
            Godot does have it's own Visualscripting language but it still needs
            work on so I would highly recommend you use the GDscript programming
            language(Similar to python). Or if you already know a programming
            language you cn download one for godot in the asset library
          </span>
          <img src={GodotNoCode} alt="" className="editor" />
          <span className="src">
            More Info At{" "}
            <a
              className="link-post"
              target="_blank"
              href="https://docs.godotengine.org/en/stable/getting_started/scripting/visual_script/getting_started.html"
            >
              Godot's Documentation
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Choose_Your_Game_Engine;
