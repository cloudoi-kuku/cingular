/**
 * Copyright (C) 2025 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import path from "path";
import { compileTemplate } from "@fonoster/common";
import { TemplatesEnum } from "../templates/TemplatesEnum";
import { VerificationParams } from "./types";

function createBodyForVerificationMessage(
  params: Omit<VerificationParams, "recipient">
) {
  const { verificationCode, templateDir } = params;

  const template = TemplatesEnum.VERIFY_PHONE;

  const actualTemplateDir =
    templateDir || path.join(__dirname, "..", "templates");

  const templatePath = `${actualTemplateDir}/${template}.hbs`;

  return compileTemplate({
    filePath: templatePath,
    data: {
      verificationCode
    }
  });
}

export { createBodyForVerificationMessage };
