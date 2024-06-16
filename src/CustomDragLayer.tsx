import React from "react";
import { XYCoord, useDragLayer } from "react-dnd";
import { CustomDragLayerContainer } from "./styles";
import { Column } from "./Column";

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }
  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  console.log(item);

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          id={item[0].id}
          text={item[0].text}
          index={item[0].index}
          isPreview={true}
        />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
