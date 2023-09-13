import './Card.css'; // 스타일 파일을 임포트합니다.

function Card() {
  
  return (
    <ul class="card-list">

      <li class="card">
        <a class="card-image" href="#">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg"
            alt="dataMindHub"
          />
        </a>
        <a>
          <h2>Psychopomp</h2>
          <p>Japanese Breakfast</p>
        </a>
      </li>

      <li class="card">
        <a class="card-image" href="#">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg"
            alt="dataMindHub"
          />
        </a>
        <a>
          <h2>Psychopomp</h2>
          <p>Japanese Breakfast</p>
        </a>
      </li>

      <li class="card">
        <a class="card-image" href="#">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg"
            alt="dataMindHub"
          />
        </a>
        <a>
          <h2>Psychopomp</h2>
          <p>Japanese Breakfast</p>
        </a>
      </li>

    </ul>
  );
}

export default Card;
