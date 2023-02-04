import { PrevArrowIcon, NextArrowIcon, SearchIcon, HeartIcon } from "../components/Icons/Icons";

import { NavLink } from "react-router-dom";

import banner from "../assets/581376.jpg"

const HomePage = () => {
    return (
        <>

            <section className="slider">
                <section className="wrapper">
                    <div className="slides">
                        <div className="slide" style={{
                            backgroundColor: "#f4efe9",
                        }}>
                            <div className="slide__lfet">
                                <h2>Stan Smith, Forever!</h2>
                                <NavLink className="button xl" to="/">Купить</NavLink>
                            </div>
                            <div className="slide__right">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="control">
                        <button className="prev">
                            <PrevArrowIcon />
                        </button>
                        <button className="next">
                            <NextArrowIcon />
                        </button>
                    </div>
                </section>
            </section>
            <section className="section catalog">
                <header className="section-header">
                    <h2 className="section__title">
                        Все кроссовки
                    </h2>

                    <div className="search-box">
                        <div className="">
                            <SearchIcon size={24}></SearchIcon>
                        </div>
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </header>
                <div className="products">
                    <div className="product">
                        <div className="product__action">
                            <HeartIcon/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HomePage;