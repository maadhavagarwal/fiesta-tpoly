import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function EnrollNow() {
  const [participants, setParticipants] = useState([]);
  const [groupName, setGroupName] = useState("");  // New state for group name
  const [isParticipantsInitialized, setIsParticipantsInitialized] = useState(false);

  const param = useParams(); // Get event name from URL
  const eventLimits = {
    businessfair: 3,
    sparkstudio: 6,
    smartgardenworkshop: 4,
    ecoquiz: 2,
    seminar1: 1,
    seminar2: 1,
    seminar3: 1,
    seminar4: 1,
  };

  const eventAPIs = {
    businessfair: "https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    sparkstudio: "https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    smartgardenworkshop: "https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    ecoquiz: "https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    seminar1:"https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    seminar2:"https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    seminar3:"https://sheetdb.io/api/v1/ybo9zku6nr4v2",
    seminar4:"https://sheetdb.io/api/v1/ybo9zku6nr4v2",
  };

  // Initialize participant forms based on event limit
  const initializeParticipants = () => {
    if (!isParticipantsInitialized && param.eventname && eventLimits[param.eventname]) {
      setParticipants(
        Array(eventLimits[param.eventname]).fill({
          name: "",
          email: "",
          phone: "",
          age: "",
          collegeName: "",
          year: "",
          branch: "",
        })
      );
      setIsParticipantsInitialized(true);
    }
  };

  useEffect(() => {
    initializeParticipants();
  }, [param.eventname, isParticipantsInitialized]);

  const handleInputChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = { ...updatedParticipants[index], [field]: value };
    setParticipants(updatedParticipants);
  };

  const handleSubmit = async () => {
    if (!groupName.trim()) {
      toast.error("Please enter a group name.");
      return;
    }

    if (participants.some((p) => Object.values(p).some((v) => !v))) {
      toast.error("Please fill out all fields for all participants.");
      return;
    }

    const groupId = Math.random().toString(36).substr(2, 9); // Generate random group ID
    const dataToSubmit = participants.map((participant) => ({
      groupId,
      groupName, // Add group name to the submission
      ...participant,
    }));

    try {
      const apiUrl = eventAPIs[param.eventname];
      if (!apiUrl) {
        console.error(`No API configured for event: ${param.eventname}`);
        return;
      }

      await axios.post(apiUrl, { data: dataToSubmit });
      toast.success("Participants registered successfully!");
      setParticipants([]); // Clear the forms after submission
      setGroupName(""); // Clear group name
      setIsParticipantsInitialized(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Failed to register participants. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Register Participants</h2>
      {param.eventname && eventLimits[param.eventname] && (
        <div>
          <h3>
            {param.eventname} (Limit: {eventLimits[param.eventname]} participants)
          </h3>

          {/* Group Name Input */}
          <Form.Group>
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </Form.Group>

          {/* Participant Forms */}
          {participants.map((participant, index) => (
            <Form className="mb-3 participant-form" key={index}>
              <h5>Participant {index + 1}</h5>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter participant's name"
                  value={participant.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter participant's email"
                  value={participant.email}
                  onChange={(e) =>
                    handleInputChange(index, "email", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter participant's phone number"
                  value={participant.phone}
                  onChange={(e) =>
                    handleInputChange(index, "phone", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter participant's age"
                  value={participant.age}
                  onChange={(e) =>
                    handleInputChange(index, "age", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>College Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter participant's college name"
                  value={participant.collegeName}
                  onChange={(e) =>
                    handleInputChange(index, "collegeName", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="First Year"
                    name={`year-${index}`}
                    value="First"
                    checked={participant.year === "First"}
                    onChange={(e) =>
                      handleInputChange(index, "year", e.target.value)
                    }
                  />
                  <Form.Check
                    type="radio"
                    label="Second Year"
                    name={`year-${index}`}
                    value="Second"
                    checked={participant.year === "Second"}
                    onChange={(e) =>
                      handleInputChange(index, "year", e.target.value)
                    }
                  />
                  <Form.Check
                    type="radio"
                    label="Third Year"
                    name={`year-${index}`}
                    value="Third"
                    checked={participant.year === "Third"}
                    onChange={(e) =>
                      handleInputChange(index, "year", e.target.value)
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  as="select"
                  value={participant.branch}
                  onChange={(e) =>
                    handleInputChange(index, "branch", e.target.value)
                  }
                >
                  <option value="">Select Branch</option>
                  <option>Computer Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Information Technology</option>
                  <option>Mechanical Engineering</option>
                </Form.Control>
              </Form.Group>
            </Form>
          ))}

          <Button variant="primary" onClick={handleSubmit}>
            Submit Participants
          </Button>
        </div>
      )}
    </div>
  );
}
