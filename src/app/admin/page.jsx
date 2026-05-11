'use client'
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
import { toast } from "react-toastify";

const AdminPage = () => {
    const onSubmit=async(event)=>{
        event.preventDefault()
        const formData=new FormData(event.currentTarget)
        const packageData=Object.fromEntries(formData.entries())
        const res=await fetch("http://localhost:8000/addDestination",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(packageData)
        })
        const data = await res.json()
        if(data.insertedId){
            toast.success("Package information added successfully!")
        }
        else{
            toast.error("Something wrong!")
        }
        
    }
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-6xl">Add New Travel Package</h1>
      <div className="flex justify-center items-center mt-10 ">
        <Form onSubmit={onSubmit} className="w-full max-w-200 border border-gray-300 p-20 shadow-lg">
          <Fieldset>
            <FieldGroup>
              <TextField isRequired name="destinationName">
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise"/>
              </TextField>
              <div className="flex justify-between">
                <div className="space-y-4">
                  <TextField isRequired name="country">
                    <Label>Country</Label>
                    <Input placeholder="Indonesia" />
                  </TextField>
                  <TextField isRequired name="price">
                    <Label>Price(USD)</Label>
                    <Input placeholder="e.g., 1299" />
                  </TextField>
                  <TextField isRequired name="date" type="date">
                    <Label>Departure Date</Label>
                    <Input />
                  </TextField>
                </div>
                <div className="space-y-4">
                  <Select isRequired name="category" placeholder="Beach">
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
                  <TextField name="rating">
                    <Label>Rating</Label>
                    <Input placeholder="e.g., 4.5" />
                  </TextField>
                  <TextField name="duration">
                    <Label>Duration</Label>
                    <Input placeholder="e.g., 5 Days" />
                  </TextField>
                </div>
              </div>
              <TextField isRequired name="image" type="url">
                <Label>Image URL</Label>
                <Input placeholder="https://example.com/image.jpg"/>
              </TextField>
              <TextField  type="text">
                <Label>Description</Label>
                <TextArea name="description" placeholder="Describe the travel experience..."/>
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit" className="rounded-none bg-cyan-600 text-white"><BiSave/> Add Travel Package</Button>
              <Button type="reset" variant="outline" className="rounded-none border-red-500 text-red-600">
                Reset
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default AdminPage;
