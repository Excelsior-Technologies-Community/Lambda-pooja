import Footer from "../components/Footer";
import "./typography.css";

const headingLevels = [1, 2, 3, 4, 5, 6];

function Typography() {
  return (
    <>
      <main className="typography-page">
        <section className="typography-card">
          <div className="typography-tabs">
            <button className="typography-tab active">Book</button>
            <button className="typography-tab">More</button>
          </div>

          <div className="typography-actions">
            <button className="typography-next">Next</button>
          </div>

          <section className="typography-section">
            <h1 className="typography-title">Headlines</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <article className="headline-example primary">
                <p className="headline-kicker">Phasellus leo, hendrerit ac sem vitae</p>
                <h2>Lorem ipsum dolor sit amet</h2>
                <span className="headline-divider" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo,
                  hendrerit ac sem vitae, posuere egestas nisi. Lorem ipsum dolor sit
                  amet. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi.
                </p>
              </article>

              <article className="headline-example accent">
                <p className="headline-kicker">Curabitur vitae libero at arcu varius</p>
                <h2>Donec facilisis magna vel mauris</h2>
                <p>
                  Integer pretium, lorem in facilisis luctus, neque erat commodo augue,
                  at luctus tortor augue sit amet ipsum.
                </p>
              </article>
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Headings</h1>
            <div className="title-rule" />

            <div className="example-box heading-box">
              <span className="example-label">Example</span>

              {headingLevels.map((level) => {
                const HeadingTag = `h${level}`;

                return (
                  <div className="heading-row" key={level}>
                    <HeadingTag>
                      H{level} heading <span>Secondary text</span>
                    </HeadingTag>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Paragraph and Lead Text</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <article className="paragraph-example">
                <p className="paragraph-lead">
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                </p>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
                </p>
              </article>
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Blockquote</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <blockquote className="blockquote-example">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer>
                  - Someone famous in <cite>Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Lists</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <div className="list-example">
                <ol className="list-default">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Phasellus iaculis neque</li>
                </ol>

                <div className="list-columns">
                  <ul className="list-style-1">
                    <li>list-style-1</li>
                    <li>list-style-1</li>
                    <li>list-style-1</li>
                  </ul>

                  <ul className="list-style-2">
                    <li>list-style-2</li>
                    <li>list-style-2</li>
                    <li>list-style-2</li>
                  </ul>

                  <ul className="list-style-3">
                    <li>list-style-3</li>
                    <li>list-style-3</li>
                    <li>list-style-3</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Tables</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <table className="table-default">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <table className="table-primary">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <table className="table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="typography-section">
            <h1 className="typography-title">Font Awesome</h1>
            <div className="title-rule" />

            <div className="example-box">
              <span className="example-label">Example</span>

              <div className="fontawesome-example">
                <i className="fa fa-font-awesome" aria-hidden="true" />
                <div>
                  <p>
                    Font Awesome gives you scalable vector icons that can instantly be customized -- size, color, drop shadow, and anything that can be done with the power of CSS.
                  </p>
                  <p>
                    Plus: Font Awesome won't trip up screen readers, unlike other icon fonts.
                  </p>
                </div>
              </div>

              <div className="fontawesome-icons">
                <i className="fa fa-flag" aria-hidden="true"></i>
                <i className="fa fa-leaf" aria-hidden="true"></i>
                <i className="fa fa-apple" aria-hidden="true"></i>
              </div>

              <div className="icon-callout">
                <i className="fa fa-crown" aria-hidden="true"></i>
                <span>Icons are important to web projects because they are a visual way to help add meaning to elements.</span>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Typography;
