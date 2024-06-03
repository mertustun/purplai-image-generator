import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { api_Key, base_URL } from "../api_service";
import None from '../assets/style_images/none.png'
import three_d_model from '../assets/style_images/3d-model.png'
import Analog from '../assets/style_images/analog-film.png'
import Anime from '../assets/style_images/anime.png'
import Cinematic from '../assets/style_images/cinematic.png'
import ComicBook from '../assets/style_images/comic-book.png'
import Digital from '../assets/style_images/digital-art.png'
import Enhance from '../assets/style_images/enhance.png'
import Fantasy from '../assets/style_images/fantasy-art.png'
import Isometric from '../assets/style_images/isometric.png'
import LineArt from '../assets/style_images/line-art.png'
import LowPoly from '../assets/style_images/low-poly.png'
import ModelingCompound from '../assets/style_images/modeling-compound.png'
import NeonPunk from '../assets/style_images/neon-punk.png'
import Origami from '../assets/style_images/origami.png'
import Photographic from '../assets/style_images/photographic.png'
import PixelArt from '../assets/style_images/pixel-art.png'
import TileTexture from '../assets/style_images/tile-texture.png'

const ContextApi = createContext()

export const ApiProvider = ({ children }) => {
    const size = [
        {
            title: '1536x640',
            height: 640,
            width: 1536
        },

        {
            title: '1344x768',
            height: 768,
            width: 1344
        },

        {
            title: '1216x832',
            height: 832,
            width: 1216
        },

        {
            title: '1152x896',
            height: 896,
            width: 1152
        },

        {
            title: '1024x1024',
            height: 1024,
            width: 1024
        },

        {
            title: '896x1152',
            height: 1152,
            width: 896
        },

        {
            title: '832x1216',
            height: 1216,
            width: 832
        },

        {
            title: '768x1344',
            height: 1344,
            width: 768
        },

        {
            title: '640x1536',
            height: 1536,
            width: 640
        },
    ]

    const styles = [
        {
            img: None,
            title: 'None',
            style_preset: null
        },
        {
            img: three_d_model,
            title: '3D Model',
            style_preset: '3d-model'
        },
        {
            img: Analog,
            title: 'Analog Film',
            style_preset: 'analog-film'
        },
        {
            img: Anime,
            title: 'Anime',
            style_preset: 'anime'
        },
        {
            img: Cinematic,
            title: 'Cinematic',
            style_preset: 'cinematic'
        },
        {
            img: ComicBook,
            title: 'Comic Book',
            style_preset: 'comic-book'
        },
        {
            img: Digital,
            title: 'Digital Art',
            style_preset: 'digital-art'
        },
        {
            img: Enhance,
            title: 'Enhance',
            style_preset: 'enhance'
        },
        {
            img: Fantasy,
            title: 'Fantasy Art',
            style_preset: 'fantasy-art'
        },
        {
            img: Isometric,
            title: 'Isometric',
            style_preset: 'isometric'
        },
        {
            img: LineArt,
            title: 'Line Art',
            style_preset: 'line-art'
        },
        {
            img: LowPoly,
            title: 'Low Poly',
            style_preset: 'low-poly'
        },
        {
            img: ModelingCompound,
            title: 'Modeling Compound',
            style_preset: 'modeling-compound'
        },
        {
            img: NeonPunk,
            title: 'Neon Punk',
            style_preset: 'neon-punk'
        },
        {
            img: Origami,
            title: 'Origami',
            style_preset: 'origami'
        },
        {
            img: Photographic,
            title: 'Photographic',
            style_preset: 'photographic'
        },
        {
            img: PixelArt,
            title: 'Pixel Art',
            style_preset: 'pixel-art'
        },
        {
            img: TileTexture,
            title: 'Tile Texture',
            style_preset: 'tile-texture'
        },
    ]
    
    const [submit, setSubmit] = useState(false) // To trigger the API, only prompt form submitted by users.

    const [data, setData] = useState(null)
    const [prompt, setPrompt] = useState(' ')
    const [height, setHeight] = useState(size[0].height)
    const [width, setWidth] = useState(size[0].width)
    const [aspectRatio, setAspectRatio] = useState(4)
    const [style, setStyle] = useState(null)
    const [loading, setLoading] = useState(false) //Normally, the page has not any loading event until api's call moment.

    useEffect(() => {
        const apiGetter = async () => {
            try {
                const res = await axios.post(base_URL,
                    {
                        text_prompts: [
                            {
                                text: prompt,
                            },
                        ],
                        cfg_scale: 7,
                        height: height,
                        width: width,
                        steps: 50,
                        samples: 1,
                        style_preset: style
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: `Bearer ${api_Key}`,
                        }
                    }
                )

                setData(res.data)
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        if(submit) //submit 
        {
            apiGetter() // Call api only if submit is happened.
            setSubmit(false) // Reset submit after API call !
        }
        // apiGetter()
    }, [submit, height, width, prompt, style])
    const values = {
        data,
        setData,
        prompt,
        setPrompt,
        height,
        setHeight,
        width,
        setWidth,
        size,
        setSubmit,
        styles,
        style,
        setStyle,
        aspectRatio,
        setAspectRatio,
        loading,
        setLoading,
    }
    return <ContextApi.Provider value={values}>{children}</ContextApi.Provider>
}

export { ContextApi }