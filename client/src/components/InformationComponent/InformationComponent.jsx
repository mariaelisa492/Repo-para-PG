import React from "react";
import NavBar from "../NavBar/NavBar";

export default function InfoComponent() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <div><h1>Contact</h1></div>

                <div>
                    <div>Map</div>
                </div>

                <div>
                    <div>
                        <div>Icon</div>

                        <div>
                            <h1>Ubication</h1>
                            <p>742 Evergreen Terrace</p>
                        </div>
                    </div>

                    <div>
                        <div>Icon</div>

                        <div>
                            <h1>Email</h1>
                            <p>marianmusic@proto.com</p>
                        </div>
                    </div>

                    <div>
                        <div>Icon</div>

                        <div>
                            <h1>GitHub</h1>
                            <p>link Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}