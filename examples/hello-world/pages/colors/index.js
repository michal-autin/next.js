import { Global, css } from '@emotion/core'

export default () => (
  <div>
    <Global
      styles={css`
        /* Palette color codes */
        /* Feel free to copy&paste color codes to your application */

        .primary-1 {
          background-color: #bcbdf5;
        }
        .primary-2 {
          background-color: #787bd2;
        }
        .primary-0 {
          background-color: #4a4caa;
        }
        .primary-3 {
          background-color: #2b2e7f;
        }
        .primary-4 {
          background-color: #0d0e3a;
        }

        .secondary-1-1 {
          background-color: #fff470;
        }
        .secondary-1-2 {
          background-color: #fff362;
        }
        .secondary-1-0 {
          background-color: #f3e652;
        }
        .secondary-1-3 {
          background-color: #d9cb24;
        }
        .secondary-1-4 {
          background-color: #b2a730;
        }

        .secondary-2-1 {
          background-color: #ffbe70;
        }
        .secondary-2-2 {
          background-color: #ffb762;
        }
        .secondary-2-0 {
          background-color: #f3a952;
        }
        .secondary-2-3 {
          background-color: #d98624;
        }
        .secondary-2-4 {
          background-color: #b27630;
        }

        .complement-1 {
          background-color: #fad466;
        }
        .complement-2 {
          background-color: #dab751;
        }
        .complement-0 {
          background-color: #b99a3e;
        }
        .complement-3 {
          background-color: #8c6f19;
        }
        .complement-4 {
          background-color: #755f20;
        }

        /* end */

        body {
          margin: 0;
          padding: 2em;
          background: #fff;
          color: #000;
          font: 12px/1.33 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif;
          text-align: left;
        }
        h1 {
          margin: 0.5em 0;
          font-size: 200%;
        }
        p {
          margin: 0.5em 0;
        }

        .color-table {
          margin: 2em 2em 5em;
          border-collapse: collapse;
          border: none;
          border-spacing: 0;
          font-size: 100%;
        }
        .color-table th {
          padding: 0 1em 0 0;
          text-align: right;
          vertical-align: middle;
          font-size: 100%;
          font-weight: normal;
          border: none;
        }
        .color-table td.sample {
          width: 6em;
          height: 6em;
          padding: 10px;
          text-align: center;
          vertical-align: middle;
          font-size: 90%;
          border: 1px solid white;
          white-space: nowrap;
        }
        .color-table td.sample-0 {
          width: 18em;
        }
        .color-table.small td.sample {
          width: 3em;
          height: 3em;
          padding: 0;
          border: none;
        }
        .color-table.small td.sample-0 {
          width: 9em;
        }
        .color-table .white {
          margin-bottom: 0.2em;
          color: white;
        }
        .color-table .black {
          margin-top: 0.2em;
          color: black;
        }

        hr {
          margin: 2em 0 1em 0;
          border: none;
          border-bottom: 1px solid silver;
        }
        #footer {
          padding: 1em;
          text-align: center;
          font-size: 80%;
        }
      `}
    />
    <h1>Color Palette by Paletton.com</h1>
    <p>
      Palette URL:{' '}
      <a href="http://paletton.com/#uid=43Z0x1kleuw8KWTg1InoBmMs+avklengiVvlk7rlqihAnheGkleuwhWJqjLA-qJrhnmmikleuwhWJqjLA-qJrhnmmi">
        http://paletton.com/#uid=43Z0x1kleuw8KWTg1InoBmMs+avklengiVvlk7rlqihAnheGkleuwhWJqjLA-qJrhnmmikleuwhWJqjLA-qJrhnmmi
      </a>
    </p>

    <table className="color-table">
      <tr>
        <th>Primary color:</th>
        <td className="sample sample-1 primary-1">
          <div className="white">#BCBDF5</div>
          <div className="black">#BCBDF5</div>
        </td>
        <td className="sample sample-2 primary-2">
          <div className="white">#787BD2</div>
          <div className="black">#787BD2</div>
        </td>
        <td className="sample sample-0 primary-0">
          <div className="white">#4A4CAA</div>
          <div className="black">#4A4CAA</div>
        </td>
        <td className="sample sample-3 primary-3">
          <div className="white">#2B2E7F</div>
          <div className="black">#2B2E7F</div>
        </td>
        <td className="sample sample-4 primary-4">
          <div className="white">#0D0E3A</div>
          <div className="black">#0D0E3A</div>
        </td>
      </tr>
      <tr>
        <th>Secondary color (1):</th>
        <td className="sample sample-1 secondary-1-1">
          <div className="white">#FFF470</div>
          <div className="black">#FFF470</div>
        </td>
        <td className="sample sample-2 secondary-1-2">
          <div className="white">#FFF362</div>
          <div className="black">#FFF362</div>
        </td>
        <td className="sample sample-0 secondary-1-0">
          <div className="white">#F3E652</div>
          <div className="black">#F3E652</div>
        </td>
        <td className="sample sample-3 secondary-1-3">
          <div className="white">#D9CB24</div>
          <div className="black">#D9CB24</div>
        </td>
        <td className="sample sample-4 secondary-1-4">
          <div className="white">#B2A730</div>
          <div className="black">#B2A730</div>
        </td>
      </tr>
      <tr>
        <th>Secondary color (2):</th>
        <td className="sample sample-1 secondary-2-1">
          <div className="white">#FFBE70</div>
          <div className="black">#FFBE70</div>
        </td>
        <td className="sample sample-2 secondary-2-2">
          <div className="white">#FFB762</div>
          <div className="black">#FFB762</div>
        </td>
        <td className="sample sample-0 secondary-2-0">
          <div className="white">#F3A952</div>
          <div className="black">#F3A952</div>
        </td>
        <td className="sample sample-3 secondary-2-3">
          <div className="white">#D98624</div>
          <div className="black">#D98624</div>
        </td>
        <td className="sample sample-4 secondary-2-4">
          <div className="white">#B27630</div>
          <div className="black">#B27630</div>
        </td>
      </tr>
      <tr>
        <th>Complement color:</th>
        <td className="sample sample-1 complement-1">
          <div className="white">#FAD466</div>
          <div className="black">#FAD466</div>
        </td>
        <td className="sample sample-2 complement-2">
          <div className="white">#DAB751</div>
          <div className="black">#DAB751</div>
        </td>
        <td className="sample sample-0 complement-0">
          <div className="white">#B99A3E</div>
          <div className="black">#B99A3E</div>
        </td>
        <td className="sample sample-3 complement-3">
          <div className="white">#8C6F19</div>
          <div className="black">#8C6F19</div>
        </td>
        <td className="sample sample-4 complement-4">
          <div className="white">#755F20</div>
          <div className="black">#755F20</div>
        </td>
      </tr>
    </table>

    <table className="color-table small">
      <tr>
        <th>Primary color:</th>
        <td className="sample sample-1 primary-1" />
        <td className="sample sample-2 primary-2" />
        <td className="sample sample-0 primary-0" />
        <td className="sample sample-3 primary-3" />
        <td className="sample sample-4 primary-4" />
      </tr>
      <tr>
        <th>Secondary color (1):</th>
        <td className="sample sample-1 secondary-1-1" />
        <td className="sample sample-2 secondary-1-2" />
        <td className="sample sample-0 secondary-1-0" />
        <td className="sample sample-3 secondary-1-3" />
        <td className="sample sample-4 secondary-1-4" />
      </tr>
      <tr>
        <th>Secondary color (2):</th>
        <td className="sample sample-1 secondary-2-1" />
        <td className="sample sample-2 secondary-2-2" />
        <td className="sample sample-0 secondary-2-0" />
        <td className="sample sample-3 secondary-2-3" />
        <td className="sample sample-4 secondary-2-4" />
      </tr>
      <tr>
        <th>Complement color:</th>
        <td className="sample sample-1 complement-1" />
        <td className="sample sample-2 complement-2" />
        <td className="sample sample-0 complement-0" />
        <td className="sample sample-3 complement-3" />
        <td className="sample sample-4 complement-4" />
      </tr>
    </table>

    <p>
      See the HTML source for more details.
      <br />
      Use the <em>Save / Save As...</em> command in your browser to store the
      document for latter use.
    </p>

    <hr />

    <p id="footer">
      Generated by <a href="http://paletton.com">Paletton.com</a> &copy;
      2002-2014
    </p>
  </div>
)
