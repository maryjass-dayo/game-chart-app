export type ResultObj = {
  name: string;
  url: string;
};

type ResultProps = {
  result: ResultObj;
  onReset: () => void;
}

export const Result: React.FC<ResultProps> = ({ result, onReset }) => {
  const { name, url } = result;

  return (
    <div>
      <h2>診断結果</h2>
      <p>
        あなたにオススメなのは
        <br />
        <span style={{ fontWeight: "bold" }}>{name}</span>です
      </p>
      <div className="flex">
        <button className="result">
          <a href={url} target="_blank" rel="noreferrer">
            詳しく見る
          </a>
        </button>
        <button className="reset" onClick={onReset}>
          やりなおす
        </button>
      </div>
    </div>
  );
};