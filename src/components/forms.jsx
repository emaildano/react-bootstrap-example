import React, {Component} from 'react';
import {
  Panel,
  PageHeader,
  Col,
  Grid,
  Row,
  FormGroup,
  Checkbox,
  FormControl,
  Radio,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap';

class Forms extends Component {

  render() {

    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    const formInstance = (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <FieldGroup id="formControlsPassword" label="Password" type="password" />
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="File"
          help="Example block-level help text here."
        />

        <Checkbox checked readOnly>
          Checkbox
        </Checkbox>
        <Radio checked readOnly>
          Radio
        </Radio>

        <FormGroup>
          <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
          <Checkbox inline>3</Checkbox>
        </FormGroup>
        <FormGroup>
          <Radio name="radioGroup" inline>
            1
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            2
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            3
          </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );

    return (<div>
      <div className="_gradient-purple section-padding">
        <Grid>
          <PageHeader className="white">
            Forms <small>Inverse</small>
          </PageHeader>
          <Row className="white">
            <Col sm={12}>
              {formInstance}
            </Col>
          </Row>
        </Grid>
      </div>
      <Grid>
        <PageHeader>
          Forms
        </PageHeader>
        <Row>
          <Col sm={12}>
            {formInstance}
          </Col>
        </Row>
      </Grid>
      <div className="section-padding"></div>
    </div>);
  }
}

export default Forms;
