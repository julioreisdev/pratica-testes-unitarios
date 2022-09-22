import voucherRepository from "../../src/repositories/voucherRepository";
import * as voucherService from "../../src/services/voucherService";
import { faker } from "@faker-js/faker";

describe("Teste voucherService.ts", () => {
  it("Deve chamar a função para criar um voucher.", async () => {
    jest.spyOn(voucherRepository, "getVoucherByCode").mockReturnValueOnce(null);
    jest.spyOn(voucherRepository, "createVoucher").mockImplementationOnce(null);
    await voucherService.default.createVoucher("ss", 1);
    expect(voucherRepository.createVoucher).toBeCalled();
  });
});


/* FOI O QUE EU CONSEGUI FAZER, TENHO QUE ESTUDAR E PRATICAR MAIS SOBRE O MOCK DE FUNÇÕES */