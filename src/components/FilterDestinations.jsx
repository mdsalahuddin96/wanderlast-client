'use client'
import { Label, Select, ListBox, Slider } from "@heroui/react";
const FilterDestinations = () => {
  return (
    <div className="grid grid-cols-3">
      <Select name="category" placeholder="CATEGORY">
        <Select.Trigger className="rounded-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-none">
          <ListBox>
            <ListBox.Item id="beach" textValue="beach">
              Beach
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="mountain" textValue="mountain">
              Mountain
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="adventure" textValue="adventure">
              Adventure
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="honeymoon" textValue="honeymoon">
              Honeymoon
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cultural" textValue="cultural">
              Cultural
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="budget" textValue="budget">
              Budget
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="nature" textValue="Nature">
              Nature
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      <Select name="priceRange" placeholder="PRICE RANGE">
        <Select.Trigger className="rounded-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-none">
          <ListBox>
            <ListBox.Item id="beach" textValue="beach">
              Beach
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="mountain" textValue="mountain">
              Mountain
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="adventure" textValue="adventure">
              Adventure
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="honeymoon" textValue="honeymoon">
              Honeymoon
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cultural" textValue="cultural">
              Cultural
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="budget" textValue="budget">
              Budget
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="nature" textValue="Nature">
              Nature
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      <Select name="sortBy" placeholder="SORT BY">
        <Select.Trigger className="rounded-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-none">
          <ListBox>
            <ListBox.Item id="beach" textValue="beach">
              Beach
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="mountain" textValue="mountain">
              Mountain
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="adventure" textValue="adventure">
              Adventure
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="honeymoon" textValue="honeymoon">
              Honeymoon
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cultural" textValue="cultural">
              Cultural
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="budget" textValue="budget">
              Budget
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="nature" textValue="Nature">
              Nature
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default FilterDestinations;
