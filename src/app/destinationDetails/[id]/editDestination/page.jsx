
import { getDestinationById } from "@/lib/service";
import {
  Button,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { BiSave } from "react-icons/bi";


export default async function EditDestination({params}) {
  const {id}=await params;
  const destination = await getDestinationById(id);
  const {destinationName,imageUrl, category,country,price, rating,duration,departureDate,description}=destination;
  const [day,month,year]=departureDate.split("/")
  const date=`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  const updateDestination=async(formData)=>{
    "use server"
    const updatedData=Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:8000/updateDestination/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(updatedData)
    })
    
    console.log(res)
  }
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-6xl text-center">Update Travel Package</h1>
      <div className="flex justify-center items-center mt-10 ">
        <Form
          action={updateDestination}
          className="w-full max-w-200 border border-gray-300 p-20 shadow-lg"
        >
          <Fieldset>
            <FieldGroup>
              <TextField isRequired name="destinationName" defaultValue={destinationName}>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" />
              </TextField>
              <div className="flex justify-between">
                <div className="space-y-4">
                  <TextField isRequired name="country" defaultValue={country}>
                    <Label>Country</Label>
                    <Input placeholder="Indonesia" />
                  </TextField>
                  <TextField isRequired name="price" defaultValue={price}>
                    <Label>Price(USD)</Label>
                    <Input placeholder="e.g., 1299" />
                  </TextField>
                  <TextField isRequired name="departureDate" type="date" defaultValue={date}>
                    <Label>Departure Date</Label>
                    <Input />
                  </TextField>
                </div>
                <div className="space-y-4">
                  <Select isRequired name="category" placeholder="Beach" defaultValue={category}>
                    <Label>Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
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
                  <TextField isRequired name="rating" defaultValue={rating}>
                    <Label>Rating</Label>
                    <Input placeholder="e.g., 4.5" />
                  </TextField>
                  <TextField isRequired name="duration" defaultValue={duration}>
                    <Label>Duration</Label>
                    <Input placeholder="e.g., 5 Days" />
                  </TextField>
                </div>
              </div>
              <TextField isRequired name="imageUrl" type="url" defaultValue={imageUrl}>
                <Label>Image URL</Label>
                <Input placeholder="https://example.com/image.jpg" />
              </TextField>
              <TextField type="text" defaultValue={description}>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  placeholder="Describe the travel experience..."
                />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions className="flex justify-end">
              <Button
                type="submit"
                className="rounded-none bg-cyan-600 text-white"
              >
                <BiSave /> Add Travel Package
              </Button>
              <Button
                type="reset"
                variant="outline"
                className="rounded-none border-red-500 text-red-600"
              >
                Reset
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
}
