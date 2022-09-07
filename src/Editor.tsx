import { useState, useEffect } from "react";

const thisWindow: any = window;

const Editor = () => {
  const [macroData, setMacroData] = useState<Record<string, string>>({
    label: "My Label",
  });

  const onChangeLabel = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMacroData({
      label: evt.target.value,
    });
  };

  const onSave = () => {
    thisWindow.AP?.confluence?.saveMacro(macroData);
    setTimeout(() => {
      thisWindow.AP?.confluence?.closeMacroEditor();
    });
  };

  useEffect(() => {
    thisWindow.AP?.confluence?.getMacroData((data: Record<string, string>) => {
      try {
        setMacroData(data);
      } catch {}
    });
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        height: "100vh",
        width: "100vw",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input onChange={onChangeLabel} value={macroData.label} />
      <button onClick={onSave}>Save Macro</button>
    </div>
  );
};

export default Editor;
