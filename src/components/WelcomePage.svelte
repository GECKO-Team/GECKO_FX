<script>

</script>

<div id="pageContent">
    <img class="bg" src="/images/epic_background.png" alt="gecko">

    <div id="welcomePageContainer" class="card">
        <div>
            <p class="mainHeader">Welcome to <span id="GECKO">GECKO</span>!</p>

             <h3 class="header">Who are we?</h3>
                <div id="WhoAreWe">
                    <p class="paragraph" id="WhoAreWeParagraph">
                        Gecko is a small team all about creating agile and blazingly fast software in a SCRUM framed environment.
                    </p>
                    <img id="geckoLogo" src="/images/pinki%201.png" alt="gecko">
                </div>

            <h3 class="header">What is Gecko?</h3>
            <p class="paragraph">
                <span>
                    Gecko is on a mission to change the way we meet new people on OTH campus.
                    <br>
                    The years of a lonely study-life through covid are finally over and we are here to help find new activities,
                    hobbies and gather around interests.
                    <br>
                    Set up your account to create and search for events of your interest and enjoy your student life at the OTH!
                </span>
            </p>

            <h3 class="header">Our vision</h3>
            <p class="paragraph">
                Meeting new people #LikeAGecko
            </p>

            <h3 class="header">Create your account now!</h3>
            <p class="paragraph">
                <a href="#/signup" id="signUpLink">Register here!</a>
            </p>

        </div>
    </div>
</div>


<style>

    #pageContent{
        /*display: flex;*/
        align-items: center;
    }

    #welcomePageContainer {
        background-color: transparent;
        align-items: center;
        width: 70%;
        padding: 1em;
        align-content: center;
        margin: 2em auto;
        color: white;
    }

    .card {
        width: 300px;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
    }

    .mainHeader   {
        margin: 1em;
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }
    .header   {
        margin-bottom: 20px;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }

/*    background images styling - begin */
    img.bg {
        /* Set rules to fill background */
        min-height: 100%;
        min-width: 1024px;

        /* Set up proportionate scaling */
        width: 100%;
        height: auto;

        /* Set up positioning */
        position: fixed;
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 1024px) { /* Specific to this particular image */
        img.bg {
            left: 50%;
            margin-left: -512px;
        }
    }
/*    background images styling - end */

    .paragraph {
        font-size: 1.3em;
        padding-bottom: 1em;
    }


    #signUpLink {
        text-decoration: none;
        font-weight: 500;
        color: #ffffff;
        padding: 2em;
        border-radius: 1em;

    }
    #signUpLink:hover {
        font-weight: 700;
    }

    #WhoAreWe {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
    }

    #WhoAreWeParagraph {
        width: 100%;
    }

    #geckoLogo {
        width: 30%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    /*styles for phones*/
    @media (max-width: 768px) {
        #WhoAreWeParagraph, #geckoLogo {
            width: 100%;
        }

        #welcomePageContainer {
            width: 80%;
            padding: 1em;
            margin: 2em auto;
            box-shadow: 0 0 30px 20px #151248;
        }

        .card {
            width: 300px;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
        }

        .mainHeader   {
            margin: 1em;
            font-size: 2em;
        }
        .header   {
            margin-bottom: 20px;
            font-size: 1.5em;
        }

        #geckoLogo {
            width: 70%;
            height: auto;
        }
    }

</style>