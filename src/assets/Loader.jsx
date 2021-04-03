import React from "react";
import Skeleton from "react-loading-skeleton";

const Loader = () => {
  return (
    <section className="container-List">
      <div className="List">
        <button className="List_button">Registre</button>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
        <article className="List_card">
          <picture className="List_card--contain-img">
            <Skeleton />
          </picture>
          <section className="List_card-info">
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
            <h4>
              <Skeleton />
            </h4>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Loader;
